function solve(country) {
    const languages = {
        'USA': 'English',
        'England': 'English',
        'Spain': 'Spanish',
        'Mexico': 'Spanish',
        'Argentina': 'Spanish'
    };

    console.log(languages[country] || 'unknown')
}