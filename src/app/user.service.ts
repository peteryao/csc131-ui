import { Injectable } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi';
import * as _ from 'lodash';
import GoogleUser = gapi.auth2.GoogleUser;

@Injectable()
export class UserService {
    public static readonly SESSION_STORAGE_KEY: string = 'accessToken';
    private user: GoogleUser;

    constructor(private googleAuth: GoogleAuthService) {
    }

    public getToken(): string {
        const token: string = sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
        if (!token) {
            throw new Error('no token set , authentication required');
        }
        return sessionStorage.getItem(UserService.SESSION_STORAGE_KEY);
    }

    public signIn(): void {
        this.googleAuth.getAuth()
            .subscribe((auth) => {
                auth.signIn().then(res => this.signInSuccessHandler(res));
            });
    }

    public isUserSignedIn(): boolean {
        return !_.isEmpty(sessionStorage.getItem(UserService.SESSION_STORAGE_KEY));
    }

    private signInSuccessHandler(res: GoogleUser) {
        this.user = res;
        sessionStorage.setItem(
            UserService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
        );
        location.reload();
    }
}
