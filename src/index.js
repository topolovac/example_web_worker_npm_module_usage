import runWorker from "web_worker_npm_module";

function doSomething() {
  runWorker({ data: "some test data second" });
}

window.doSomething = doSomething;
