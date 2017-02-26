Cole Christenson
Spring 2017 API hw2

API proxy location:
https://colechristenson11-test.apigee.net/hw2

GETS: 	/gets
POST: 	/posts
PUT: 	/puts
DELETE:	/deletes

When you send a valid request to the proxy it will return an acknowledgement of the
request and will send back query string info and http header info.
The request info, query string, and headers will be returned as a json. 
Only tests run in postman is for the status flag to make sure it is 200.

example: GET to https://colechristenson11-test.apigee.net/hw2/gets?q=cole
		 ie GET to /gets

{
  "Messages": [
    "GET request acknowledged"
  ],
  "Queries": {
    "q": "cole"
  },
  "Headers": {
    "accept": "*/*",
    "accept-encoding": "gzip, deflate",
    "cache-control": "no-cache",
    "host": "colechristenson11-test.apigee.net",
    "postman-token": "61c35163-bf6a-48ca-97f0-ec53fda42555",
    "user-agent": "PostmanRuntime/3.0.9",
    "x-forwarded-for": "107.2.243.39",
    "x-forwarded-port": "443",
    "x-forwarded-proto": "https"
  }
}

If you request to an invalid route will mark status flag 405 and return a string
letting you know what has gone wrong

example: 	POST to https://colechristenson11-test.apigee.net/hw2/puts
			ie POST to /puts

Cannot POST request http://colechristenson11-test.apigee.net/hw2/puts