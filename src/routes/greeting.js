// import { Link } from "react-router-dom"

export default function GreetingPage() {
  return (
    <div className="App">
      <article>
        <h1>Hi Stirlo!</h1>
        <p>
          Welcome to your website! This is all yours now, as far as the eye can see.
        </p>
        <p>
          You can change anything you want. You could make this a portfolio page, or a
          public toilet review app, or a static picture of a tree. This is your playground,
          a place you can practice programming and have it be live on the internet.
        </p>
        <p>
          I've set this website up with a domain name (stirlo.com, provided by godaddy) and
          a hosting service (netlify). Netlify is actually really cool and the setup was super
          easy. All you need to do to update your website LIVE is push a new commit to main
          branch.
        </p>
        <p>
          Links you might need:
          <ul>
            <li><a href="https://app.netlify.com/sites/stirlo">
              The Netlify server
            </a></li>
            <li><a href="https://dcc.godaddy.com/control/stirlo.com/dns">
              The GoDaddy domain name
            </a></li>
            <li><a href="https://github.com/HugoKawamata/stirlo-website/settings/access">
              The GitHub repo
            </a></li>
            <li><a href="https://www.youtube.com/watch?v=MhkGQAoc7bc">
              YouTube react tutorials (this is the same tutorial I used when I was learning react)
            </a></li>
          </ul>
        </p>
        <p>
          The GoDaddy domain is paid for for 1 year, but you'll need to set up a payment method yourself
          to keep it going! We can chat about setting this up in person.
        </p>
      </article>
    </div>
  )
}