import type { RouteLocationNormalized, NavigationGuardNext } from "vue-router";

const estPermititurGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
next: NavigationGuardNext
) => {

  const userId = localStorage.getItem('userId');

  localStorage.setItem('lastPath', to.path)

  if(!userId){
    return next({
      name:'login'
    });
  }

  return next();
}

export default estPermititurGuard;
