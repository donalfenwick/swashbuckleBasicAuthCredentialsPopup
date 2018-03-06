# Swashbuckle Basic HTTP Authentication credentials popup

Javascript plugin that can be loaded into swagger-ui when using [Swashbuckle](https://github.com/domaindrivendev/Swashbuckle) to generate api documentation for webapi.
The plugin provides an interface for editing basic http credentials when submitting test requests to basic auth protected api endpoints from within swagger-ui.

### build and instalation

Install packages `npm install`

Build `gulp default`

Copy `/build/authPromptPlugin-min.js` out to your webapi project and include it as an embedded resource.
See [injecting custom content](https://github.com/domaindrivendev/Swashbuckle#injecting-custom-content) on the swashbucke wiki.

To ensure the script is loaded into swagger-ui add the following code when configuring swashbuckle.
 ```httpConfiguration
    .EnableSwagger( ... )
    .EnableSwaggerUi(c =>
        {
            c.InjectJavaScript(containingAssembly, "myWebApi.SwaggerExtensions.authPromptPlugin-min.js");
            // ...
        });
 ```
 
 The popup is triggered when the user clicks on a parameter input field named "Authorization" `<input type="text" name="Authorization" />`.
 
 The `Authorization` parameter field is not added to a request in swashbuckle by defualt. 
 In order to wire this up, register the following operation filter during configuration of swashbuckle. 
 
 ```
  ...
```
