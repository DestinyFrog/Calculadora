package main
import "fmt"
import "net/http"

func main() {
	fmt.Println( "Running Static Server at: http://192.168.25.162:8000/ or http://localhost:8000/" )
	staticFolder :=  http.FileServer( http.Dir( "../" ) ) 
	http.Handle( "/", http.StripPrefix( "/", staticFolder ) )
	http.ListenAndServe(":8000", nil)
}