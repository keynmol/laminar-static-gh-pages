package example

import com.raquo.laminar.api.L.*
import org.scalajs.dom
import scala.collection.SortedMap

val myVar = Var(0)

val myApp =
  div(
    cls := "text-4xl",
    "This is a sample Scala.js application built with Laminar, see it on ",
    a(
      cls  := "text-blue-700 hover:underline",
      href := "https://github.com/keynmol/laminar-static-gh-pages",
      "Github"
    ),
    div(
      cls := "mt-4 flex gap-5 align-middle",
      b(child.text <-- myVar.signal, cls := "underline text-center w-10"),
      button(
        "Increment",
        cls := "rounded-md border-2 border-sky-500",
        cls <-- myVar.signal.map(i => "p-" + (i % 4).toString),
        onClick --> { _ => myVar.update(_ + 1) }
      )
    ),
    p(cls := "text-lg mt-4", "It does nothing useful")
  )
end myApp

@main def main =
  renderOnDomContentLoaded(dom.document.getElementById("appContainer"), myApp)
