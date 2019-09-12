package main

import (
	"fmt"
	"html/template"
	"net/http"
	"time"

	firebase "firebase.google.com/go"
	"google.golang.org/appengine" // Required external App Engine library
	"google.golang.org/appengine/datastore"
	"google.golang.org/appengine/log"
)

var (
	firebaseConfig = &firebase.Config{
		DatabaseURL:   "https://console.firebase.google.com > Overview > Add Firebase to your web app",
		ProjectID:     "https://console.firebase.google.com > Overview > Add Firebase to your web app",
		StorageBucket: "https://console.firebase.google.com > Overview > Add Firebase to your web app",
	}
	indexTemplate = template.Must(template.ParseFiles("index.html"))
)

type Post struct {
	Author  string
	UserID  string
	Message string
	Posted  time.Time
}
type templateParams struct {
	Notice  string
	Name    string
	Message string
	Posts   []Post
}

func main() {
	http.HandleFunc("/", indexHandler)
	appengine.Main() // Starts the server to receive requests
	//port := flag.String("p", "8000", "port to serve on")
	//directory := flag.String("d", "./screen", "the directory of static file to host")
	//flag.Parse()

	//http.Handle("/", http.FileServer(http.Dir(*directory)))

	//log.Printf("Serving %s on HTTP port: %s\n", *directory, *port)
	//log.Fatal(http.ListenAndServe(":"+*port, nil))
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	// if statement redirects all invalid URLs to the root homepage.
	// Ex: if URL is http://[YOUR_PROJECT_ID].appspot.com/FOO, it will be
	// redirected to http://[YOUR_PROJECT_ID].appspot.com.
	if r.URL.Path != "/" {
		http.Redirect(w, r, "/", http.StatusFound)
		return
	}
	ctx := appengine.NewContext(r)
	params := templateParams{}

	q := datastore.NewQuery("Post").Order("-Posted").Limit(20)
	if _, err := q.GetAll(ctx, &params.Posts); err != nil {
		log.Errorf(ctx, "Getting posts: %v", err)
		w.WriteHeader(http.StatusInternalServerError)
		params.Notice = "Couldn't get latest posts. Refresh?"
		indexTemplate.Execute(w, params)
		return
	}
	if r.Method == "GET" {
		indexTemplate.Execute(w, params)
		return
	}

	// [START firebase_token]
	message := r.FormValue("message")

	// Create a new Firebase App.
	app, err := firebase.NewApp(ctx, firebaseConfig)
	if err != nil {
		params.Notice = "Couldn't authenticate. Try logging in again?"
		params.Message = message // Preserve their message so they can try again.
		indexTemplate.Execute(w, params)
		return
	}
	// Create a new authenticator for the app.
	auth, err := app.Auth(ctx)
	if err != nil {
		params.Notice = "Couldn't authenticate. Try logging in again?"
		params.Message = message // Preserve their message so they can try again.
		indexTemplate.Execute(w, params)
		return
	}
	// Verify the token passed in by the user is valid.
	tok, err := auth.VerifyIDTokenAndCheckRevoked(ctx, r.FormValue("token"))
	if err != nil {
		params.Notice = "Couldn't authenticate. Try logging in again?"
		params.Message = message // Preserve their message so they can try again.
		indexTemplate.Execute(w, params)
		return
	}
	// Use the validated token to get the user's information.
	user, err := auth.GetUser(ctx, tok.UID)
	if err != nil {
		params.Notice = "Couldn't authenticate. Try logging in again?"
		params.Message = message // Preserve their message so they can try again.
		indexTemplate.Execute(w, params)
		return
	}

	// [END firebase_token]

	post := Post{
		UserID:  user.UID,
		Author:  r.FormValue("name"),
		Message: r.FormValue("message"),
		Posted:  time.Now(),
	}

	params.Name = post.Author

	if post.Message == "" {
		w.WriteHeader(http.StatusBadRequest)
		params.Notice = "No message provided"
		indexTemplate.Execute(w, params)
		return
	}

	key := datastore.NewIncompleteKey(ctx, "Post", nil)

	if _, err := datastore.Put(ctx, key, &post); err != nil {
		log.Errorf(ctx, "datastore.Put: %v", err)

		w.WriteHeader(http.StatusInternalServerError)
		params.Notice = "Couldn't add new post. Try again?"
		params.Message = post.Message // Preserve their message so they can try again.
		indexTemplate.Execute(w, params)
		return
	}
	params.Posts = append([]Post{post}, params.Posts...)

	//  if r.FormValue("message") == "" {
	//  w.WriteHeader(http.StatusBadRequest)

	//  params.Notice = "No message provided"
	//  indexTemplate.Execute(w, params)
	//  return
	//  }

	params.Notice = fmt.Sprintf("Thank you for your submission, %s!", post.Author)
	indexTemplate.Execute(w, params)

}
