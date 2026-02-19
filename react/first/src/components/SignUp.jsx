const handleSubmit = async (e) => {

    const response  = await fetch ("http://localhost:3000/users/",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    const data = await response.json();
    console.log(data);
}







export const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Firstname" />
                <br />
                <input type="text" placeholder="Lastname" />
                <br />
                <input type="email" placeholder="Email" />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="date" name="dob" id="dob"  placeholder="DOB"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}