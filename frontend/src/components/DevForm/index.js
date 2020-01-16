import React, { useState, useEffect } from 'react'

function DevForm({ onSubmit }) {
    const [github_username, setUsername] = useState("")
    const [tech_stack, setTechStack] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (userPosition) => {
                const { latitude, longitude } = userPosition.coords
                setLatitude(latitude)
                setLongitude(longitude)
            },
            (err) => {
                console.log(err)
            },
            {
                timeout: 30000
            }
        )
    }, [])

    async function handleSubmit(e) {
        e.preventDefault()

        await onSubmit({
            github_username,
            tech_stack,
            longitude,
            latitude
        })
        
        setUsername("")
        setTechStack("")
    }

    return(
    <form onSubmit={handleSubmit}>
        <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
                name="github_username" 
                id="github_username" required
                value={github_username}
                onChange={e => setUsername(e.target.value)}>
            </input>
        </div>

        <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input 
                name="techs" 
                id="techs" required
                value={tech_stack}
                onChange={e => setTechStack(e.target.value)}>
            </input>
        </div>

        <div className="input-group">
            <div className="input-block">
                <label htmlFor="latitude">Latitude</label>
                <input 
                    name="latitude" 
                    type="number" 
                    id="latitude" required
                    value={latitude}
                    onChange={e => setLatitude(e.target.value)}>
                </input>
            </div>

            <div className="input-block">
                <label htmlFor="longitude">Longitude</label>
                <input 
                    name="longitude" 
                    type="number" 
                    id="longitude" required
                    value={longitude}
                    onChange={e => setLongitude(e.target.value)}>
                </input>
            </div>
        </div>
        <button type="submit">Salvar</button>
    </form>
    )
}

export default DevForm