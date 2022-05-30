    /*
    useEffect(() => {
        const ValidaLogin = async () => {
            var url = "https://backendaula.herokuapp.com/app/logado"

            await axios.post(
                            url,
                            { },
                            {
                                headers: {
                                    "Authorization": "Bearer " + logado,
                                    "Access-Control-Allow-Origin": "*",
                                    "Content-Type": 'application/json'
                                }
                            }
                        ).then( retorno => {
                            if ( retorno.data.error ) {
                                return false
                            }

                            return true
                        })
        }

        ValidaLogin()

    }, [])
    */