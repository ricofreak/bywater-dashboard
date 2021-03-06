import _ from 'lodash';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    FormGroup,
    Grid,
    TextField,
} from 'material-ui';
import React from 'react';

import * as actions from '../control/actions';
import { connectWithStyles } from '../common';

@connectWithStyles( ( {
    user,
    errors: { LOGIN: loginError },
    inProgress: { LOGIN: loggingIn },
} ) => ( { user, loginError, loggingIn } ) )
export default class LoginPage extends React.Component {
    onLoginClick( e ) {
        if ( !this.usernameInput || !this.usernameInput.value ) {
            return;
        }

        this.props.dispatch( actions.login( { login: this.usernameInput.value, password: this.passwordInput.value } ) );

        e.preventDefault();
    }

    render() {
        const { classes, loggingIn, loginError } = this.props;

        return <div className={classes.page} style={{
            display: 'flex',
            flex: '1 1 0px',
            flexDirection: 'column',
            justifyContent: 'space-around',
        }}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={8} lg={4}>
                    <Card>
                        <form onSubmit={ e => this.onLoginClick( e ) }>
                            <CardContent>
                                <FormGroup>
                                    <TextField
                                        inputRef={ el => this.usernameInput = el }
                                        label="Username"
                                        autoFocus
                                        required
                                        error={loginError}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <TextField
                                        inputRef={ el => this.passwordInput = el }
                                        label="Password"
                                        type="password"
                                        error={loginError}
                                        helperText={ loginError ? 'Invalid username or password' : null }
                                    />
                                </FormGroup>
                            </CardContent>
                            <CardActions>
                                { loggingIn ?
                                    <Button disabled>Logging In...</Button> :
                                    <Button variant="raised" color="primary" type="submit">Log In</Button>
                                }
                            </CardActions>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>;
    }
}
