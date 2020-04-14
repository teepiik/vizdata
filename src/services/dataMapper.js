const mapApiListResponse = (response) => {
    let pos = 0

    // Forms an object
    const helper = (track) => {
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

export default { mapApiListResponse }