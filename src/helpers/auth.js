import store from "../store";

let checkAuth = function(to, from, next) {
  //if(store.getters['auth/token']) {
    next()
  // }
  // store.dispatch('auth/tryToAutoSignIn').then(result => {
  //   if(result.success) {
  //     next()
  //   } else {
  //     next({name: 'SignIn'})
  //   }
  // })
}

export {checkAuth}
