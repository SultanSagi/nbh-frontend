export default function({$auth, redirect, store}) {
    let user = $auth.user;
    if(user && user.role == 'user') {

    }
    else {
        redirect('/')
    }
}