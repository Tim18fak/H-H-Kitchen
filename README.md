NxLIJ5iLNTdXupkM
timothyavellolatunde
XK94yGTXQHEkQ6I9
XK94yGTXQHEkQ6I9

to deploy a single vercel server 

{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
    "version": Indicates that you are using version 2 of the Vercel configuration.

    "builds": Specifies the build settings. It says that when building the project, use @vercel/node to handle the Node.js application.

    "routes": Defines how requests should be routed. In this case, all requests (/(.*)) should be directed to server.js.


    so to deploy two server i need to have two src for the build

    and specify the routes that both servers will be using

    below is a sample

    {
  "version": 2,
  "builds": [
    { "src": "server.js", "use": "@vercel/node" },
    { "src": "index.js", "use": "@vercel/node" }
  ],
  "routes": [
    {
      "src": "/verify(.*)",
      "dest": "server.js"
    },
    {
      "src": "/auth(.*)",
      "dest": "index.js"
    }
  ]
}


the src specify the particular url that vercel should look out for to send or route the the specify server.

'/verify: This part specifies that the URL should start with "/verify".

(*) mean that any other url part that jion with /verify

"dest": "server.js": This specifies the destination file or function that should handle the incoming requests matching the specified source pattern. In this case, requests that match the "/verify(.*)" pattern will be directed to the server.js file.

For example, if your Vercel deployment has a URL like https://your-vercel-app.vercel.app/verify/some-path, it will match the source pattern /verify(.*), and the request will be handled by the server.js file.