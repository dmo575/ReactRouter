## ABOUT:
This project contains a series of components that work together in order to provide a basic routing functionality in the client. Is the final project from Nader's React in Depth series from "Tech with Nader"'s youtube channel.

This project is meant to be an exersice for me to learn and practice both React and Git/Github.

### Sample usage:
<BrowserRouter>
    <Route path={'/home/'}>
      <HomeComponent/>
    </Route>
    <Route path={'/account/'}>
      <p>Account Settings</p>
    </Route>
    <Route path={'/login/'}>
      <p>Welcome, Log in</p>
      <Link path={'/account/'}>
      <p>Go to Account</p>
      <Link>
    </Route>
</BrowserRouter>