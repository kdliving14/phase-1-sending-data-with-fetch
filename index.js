// // Add your code here

const url = "http://localhost:3000/users"

function submitData(name, email)
{
    const body = {};
    body.name = name;
    body.email = email;

    console.log(body.name)
    console.log(body.email)

    fetch("http://localhost:3000/users",{
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify(body)
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(res => alert(res))
    
}

function deleteData(id)
{
    fetch(`${url}/${id}`,
    {
        method: "DELETE",
        headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
}
