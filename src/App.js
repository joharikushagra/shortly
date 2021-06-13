import Grid from "@material-ui/core/Grid";
import Search from "./components/Search";
import "./App.css";
import Navbar from "./components/Navbar";
import Vector from "./static/shortly-img.jpg";
import Vector2 from "./static/shortly-img2.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Grid className="App" container justify="center" alignItems="center">
        <Grid item md={6} sm={6} xs={12}>
          <Grid container justify="center" alignItems="center">
            <img src={Vector2} alt="" className="shortly-img2" />
          </Grid>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <Grid
            container
            justify="flex-start"
            alignItems="center"
            className="text"
          >
            <h2>
              <span className="first-text">SHORTLY</span>, an utility tool which
              trims your long clumsy URLs into short nicer ones!
            </h2>
            <p>Try out by entering your link...</p>
          </Grid>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Grid
            container
            direction="column"
            className="text"
            justify="center"
            alignItems="center"
          >
            <Search />
          </Grid>
        </Grid>

        <Grid item md={6} sm={6} xs={12}>
          <Grid container justify="center" alignItems="center">
            <img src={Vector} alt="Shortly-img" className="shortly-img" />
          </Grid>
        </Grid>
      <Grid container justify="center" >
        <Footer />
      </Grid>
      </Grid>
    </>
  );
}

export default App;
