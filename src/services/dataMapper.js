const mapApiListResponse = (response) => {
    let pos = 0

    // Forms an object
    const helper = track => {
        pos = pos + 1
        return {
            position: pos,
            duration: track.duration_ms,
            popularity: track.popularity
        }
    }

    const mapped = response.tracks.items.map(t => helper(t.track))
    return mapped
}

const mapPopularity = data => {
    const helper = track => {
        return {
            position: track.position,
            value: track.popularity
        }
    }
    return data.map(t => helper(t))
}

const mapDuration = data => {
    const helper = track => {
        return {
            position: track.position,
            value: track.duration / 1000
        }
    }
    return data.map(t => helper(t))
}

export default { mapApiListResponse, mapPopularity, mapDuration }