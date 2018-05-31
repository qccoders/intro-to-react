export const fetchRepos = (user) => {
  return fetch(`https://api.github.com/users/${user}/repos`)
  .then(res => res.json())
}
