import Header from "./components/common/Header";
import Banner from "./components/Banner";
import OnlineStreaming from "./components/OnlineStreaming";
import Details from "./components/Details";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Pricing from "./components/Pricing";
import Movie from "./components/Movie";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/common/Footer";


export const routes = [{
    path: '',
    components: {
      default: Banner,
      "Header": Header,
      "Banner": Banner,
      "Streaming": OnlineStreaming,
      "Services": Services,
      "Newsletter": Newsletter,
      "Footer": Footer,
    }
  },
  {
    path: "/details/:id",
    components: {
      default: Details,
      "Header": Header,
      "Streaming": OnlineStreaming,
      "Footer": Footer,
    }
  },
  {
    path: "/movie",
    components: {
      default: Movie,
      "Header": Header,
      "Streaming": OnlineStreaming,
      "Newsletter": Newsletter,
      "Footer": Footer,
    }
  },
  {
    path: "/pricing",
    components: {
      default: Pricing,
      "Header": Header,
      "Newsletter": Newsletter,
      "Footer": Footer,
    }
  },
  {
    path: "/blog",
    components: {
      default: Blog,
      "Header": Header,
      "Newsletter": Newsletter,
      "Footer": Footer,
    }
  },
  {
    path: "/contact",
    components: {
      default: Contact,
      "Header": Header,
      "Newsletter": Newsletter,
      "Footer": Footer,
    }
  }
]
