const activity =(tarea,duracion,callback) => {
    //console.log(tarea);
    setTimeout(()=>{
        callback(tarea)
    },duracion)
    
}

activity("1. Levantarse",5000,(tarea)=> {
    console.log("Tarea: " + tarea)
    activity("2. Tender cama",3000,(tarea)=> {
        console.log("Tarea: " + tarea)
        activity("3. Bañarse",3000,(tarea)=> {
            console.log("Tarea: " + tarea)
            activity("4. Tomar clase de Paradigmas",5000,(tarea)=> {
                console.log("Tarea: " + tarea)
                activity("5. Desayunar",8000,(tarea)=> {
                    console.log("Tarea: " + tarea)
                    activity("6. Jugar videojuegos",10000,(tarea)=> {
                        console.log("Tarea: " + tarea)
                    })
                })
            })
        })
    })
    
})