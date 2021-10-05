<template>
  <div id="app">
    <app-header></app-header>
    <app-banner></app-banner>
    <app-online-streaming></app-online-streaming>
    <app-services></app-services>
    <app-newsletter></app-newsletter>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./components/common/Header";
import Banner from "./components/Banner";
import OnlineStreaming from "./components/OnlineStreaming";
import Services from "./components/Services";
import Newsletter from "./components/Newsletter";
import Footer from "./components/common/Footer";

export default {
  components: {
    appHeader: Header,
    appBanner: Banner,
    appOnlineStreaming: OnlineStreaming,
    appServices: Services,
    appNewsletter: Newsletter,
    appFooter: Footer,
  },
  name: "app",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: "Poppins", sans-serif;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
  transition: .3s;
}

i{
  cursor: pointer;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
