import React from 'react';


interface LoginProp {
}

interface LoginState  
{   FirstName: string;
    LastName: string;
    sex: string;
    userName: string;
    Password: any,
    LogInorOut: Boolean;
    
}

export default class LOGIN extends React.Component<LoginProp , LoginState>
   
{
    constructor ( props: string | number)
    {
        super ( props);
        this.state = {
            FirstName: "Tee",
            LastName: "Anabel",
            sex: 'female',
            userName:'TeeAnabel',
            Password: 'miztee01',
            LogInorOut: false

            
        }
    }
CarryLogin = ( event: any) =>
{
    event.preventDefault();

    let userNameString: string,
    Passwordletter: any

    const userName: HTMLInputElement | any   = document.querySelector ('[name="user-Name"])' );
    const Password: HTMLInputElement | any   = document.querySelector('[name=  "pass-word]');

    if ( userName === 'TeeAnabel' )
        userNameString = userName.value;
    else
        return 'incorrect';

    if ( Password === 'miztee01')
        Passwordletter = Password.value;
    else 
        return 'incorrect';

    this.setState
    (
        {
            userName: userNameString,
            Password: Passwordletter,
            LogInorOut: this.state.LogInorOut,
        }
    );

}

LogInOut = () => {
    this.setState(
        {
            userName: this.state.userName,
            Password: this.state.Password,
            LogInorOut: !this.state.LogInorOut,
        });
    
    }
LoggedIn = () => {
        return (
            <div>

                <br></br>
                    <br></br>
                    <br></br>
                <form onSubmit={this.CarryLogin}>
                    
                    <label htmlFor="user-Name">USERNAME:</label>
                    <input type="text" name="user-Name" defaultValue={this.state.userName} />
                    <label htmlFor="pass-word">PASSWORD:</label>
                    <input type="text" name="pass-word" defaultValue={this.state.Password} />
                    <input type="submit" value="Login" />
                </form>
                <button onClick={this.LogInOut}>
                  LOGIN
                </button>
            </div>
        );
    }

    LoggedOut = () => {
        return (
            <div>

                <br></br>
                    <br></br>
                    <br></br>
                <form onSubmit={this.CarryLogin}>
                    <label htmlFor="user-Name">USERNAME:</label>
                    <input type="text" name="user-Name" defaultValue={this.state.userName} />
                    <label htmlFor="pass-word">PASSWORD:</label>
                    <input type="text" name="pass-word" defaultValue={this.state.Password} />
                </form>
                <button onClick={this.LogInOut}>
                 LogOUT
                </button>
            </div>

        );

    }
    render () {
        if ( this.state.LogInorOut )
            return this.LoggedIn();
        else
            return this.LoggedOut();
    


}

}

