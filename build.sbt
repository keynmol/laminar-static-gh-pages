scalaVersion := "2.13.4"

enablePlugins(ScalaJSPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "com.raquo" %%% "laminar" % "0.14.5"

name := "laminar-static"
