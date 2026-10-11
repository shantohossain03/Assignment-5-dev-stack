import LogoText from "../assets/logo-text.png";

export default function Nav() {

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className=" container px-20  mx-auto flex justify-between gap-4 mt-5 items-center pb-5 border-b border-gray-300">
        <img src={LogoText} alt="" />

        <div className="flex gap-7 font-semibold">
        <h3>Home</h3>
        <h3>Technologies</h3>
        <h3>Projects</h3>
        <h3>About</h3>
        <h3>Contact</h3>
        </div>

        <div className="flex gap-1">
          <button className="btn w-25 rounded-3xl" >Sign In</button>
          <button className="btn w-25 bg-pink-600 text-white rounded-3xl">Sign Up</button>
        </div>
      </div>
    </nav>
  )
}
