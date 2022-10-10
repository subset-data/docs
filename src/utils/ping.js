import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export const ping = (path, data, server) => {
    
    return fetch(`${server}${(path.startsWith('/'))? path: '/'+path }`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
}