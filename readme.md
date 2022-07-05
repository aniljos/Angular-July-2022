## Angular Training



### Commands

1. Install Angular CLI: npm install -g @angular/cli
2. Create Application: ng new awesome-app
3. Start Application: ng serve --open

### Repositories

1. Angular APP: https://github.com/aniljos/Angular-September-20
2. Mock REST API: https://github.com/aniljos/REST-API-Mock

### Angular Version

1. AngularJS (1.x): https://angularjs.org/
2. Angular (> 2.x): https://angular.io/

### Tool Chain

1. Integrates multiple tools and libraries which assist in the build, testing and deploy


### .npmrc

1. Configure the proxy setting
2. Custom repository

### Types of Modules

1. ES6 Module
2. Angular Modules

### Angular Modules

1. Bootstrap Module- One per application
2. Modules provided by Angular
3. Lirary: 3rd Party Modules

### Decorator

1. ES6 Feature
2. Metadata
3. Similar Annotations or Attributes
   
### Template

1. Template is compiled and converted a View
2. In Angular 1.x this compilation happen in the browser
3. Angular 2 onwards has the AOT Compilation
4. Angular 8 introduced the Ivy compiler

### Async

1. Callbacks
2. Promises
3. Observables(RxJs)--Reactive

### Change Detection

1. Angular observes all the elements & objects that are part of the data-binding
2. Whenever a change is detected, Angular refresh/redener the UI
3. Zone.js is used for the change detection

### Observable

1. Observable Stream
2. Lazy -- need to call the subscribe
3. Unicast -- only one subscriber

### Subject(RxJS)

1. Its an observable
2. Multicast --  multiple subscriber
3. BehaviouralSubject -- Initial value
4. ReplaySubject -- has a buffer, replay the values to the new subscribers

### Single-Page Application

1. There is only one page(index.html) 
2. Page had renders views(components)
3. Navigation is between the views(component)

### Router Modules & Routes 

1. Navigation between routes
2. Manages the history
3. Child Routes
4. Lazy-loading of modules
5. Router Guards: Implemented as service
6. Navigation events


### State

1. Memory: Services(singleton)  ==> Subjects for reactive
2. Memory: Redux(ngRx)
3. Local Persistent: LocalStorage/SessionStorage ==> encrypt
4. Server Persistent: Backend
   

### Custom Form Validators

1. Validators(client) and AsyncValidators(async client & server)
2. Validator: ValidatorFn
3. AsyncValidato: AsyncValidatorFn
4. Reactive Forms: Validators are functions, AsyncValidators(server) are services
5. Templated Form : Validators are directive, AsyncValidators(server) are services & directive


### HttpClient

1. Interceptors - Intercept the request before the server call, Intercep the response before we prosess it.
2. Defined as Service 

### Change Detection onPush

1. Always use model/data-binding on immutable objects
2. onPush with immutable objects will give a better performace
   
### Sever-side rendering

1. Faster App load(First page or any routable page)
2. Optimizes for SEO
3. Angular Universal

### Mocks

1. Http -- HttpTestingController
2. Jasmine -- spyOn methods
3. Mock Libraries

   


