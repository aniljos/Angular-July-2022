app.get("/unique/:name", (req, resp) => {

    const name = req.params.name;
    console.log("unique check for " + name);
    
    const result = {unique: false};
    if(!name.startsWith("x")){
        result.unique = true;
    }
    resp.status(200)
    resp.json(result);

})