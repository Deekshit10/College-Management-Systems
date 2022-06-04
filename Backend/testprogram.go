package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

//creating struct.
type Student struct {
	Id    int    `JSON:"student_id"`
	Name  string `JSON:"name"`
	Class string `JSON:"class"`
	Marks string `JSON:"marks"`
}

func main() {

	router := mux.NewRouter().StrictSlash(true)
	corsOpts := cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{
			http.MethodGet,
			http.MethodPost,
			http.MethodPut,
			http.MethodPatch,
			http.MethodDelete,
			http.MethodOptions,
			http.MethodHead,
		},

		AllowedHeaders: []string{
			"*",
		},
	})

	// Init Router, here we are using gorilla mux router
	// router := mux.NewRouter()

	// Route Handler which establish endpoints

	router.HandleFunc("/api/students", addStudents).Methods("POST")
	router.HandleFunc("/api/students", getStudents).Methods("GET")
	router.HandleFunc("/api/students/{id}", getStudent).Methods("GET")
	router.HandleFunc("/api/students/{id}", deleteStudent).Methods("DELETE")

	// Run Server
	// handler := cors.Default().Handler(router)
	// http.ListenAndServe(":8080", handler)
	http.ListenAndServe(":8080", corsOpts.Handler(router))
}

func addStudents(res http.ResponseWriter, req *http.Request) {

	var studentPost Student
	json.NewDecoder(req.Body).Decode(&studentPost)
	db := dbConnection()
	statement, err := db.Prepare("INSERT INTO `studentdb`.`student_table`( `student_name`, `sclass`, `marks`)VALUES(?, ?, ?)")
	if err != nil {
		panic(err.Error())
	}
	/*body, err := ioutil.ReadAll(req.Body)
	if err != nil {
		panic(err.Error())
	}*/
	/*dataMap := make(map[string]string)
	json.Unmarshal(body, &dataMap)
	id := dataMap["id"]
	name := dataMap["name"]
	class := dataMap["class"]
	marks := dataMap["marks"]*/

	_, err = statement.Exec(studentPost.Name, studentPost.Class, studentPost.Marks)
	if err != nil {
		panic(err.Error())
	}
	fmt.Fprintf(res, "New student created")
}

func getStudent(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")
	params := mux.Vars(req)

	db := dbConnection()
	result, err := db.Query("SELECT * FROM `studentdb`.`student_table` WHERE `student_id` = ?", params["id"])
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()

	var student Student

	for result.Next() {
		err := result.Scan(&student.Id, &student.Name, &student.Class, &student.Marks)
		if err != nil {
			panic(err.Error())
		}
	}
	json.NewEncoder(res).Encode(student)
}

// getBooks returns all books.
func getStudents(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	var students []Student
	db := dbConnection()
	result, err := db.Query("SELECT * FROM `studentdb`.`student_table`")
	if err != nil {
		panic(err.Error())
	}
	defer result.Close()

	for result.Next() {
		var student Student
		err := result.Scan(&student.Id, &student.Name, &student.Class, &student.Marks)
		if err != nil {
			panic(err.Error())
		}
		students = append(students, student)

	}
	json.NewEncoder(w).Encode(students)
}

// deleteBook delete a book based on id
func deleteStudent(res http.ResponseWriter, req *http.Request) {
	res.Header().Set("Content-Type", "application/json")

	params := mux.Vars(req)
	db := dbConnection()
	statement, err := db.Prepare("DELETE FROM `studentdb`.`student_table` WHERE `student_id` = ?")
	if err != nil {
		panic(err.Error())
	}
	_, err = statement.Exec(params["id"])
	if err != nil {
		panic(err.Error)
	}
	fmt.Fprintf(res, "student %d deleted", params["id"])
}

func dbConnection() *sql.DB {
	db, err := sql.Open("mysql", "root:deek@123@tcp(192.168.49.2:32003)/studentdb")
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	//defer db.Close()
	return db

}
