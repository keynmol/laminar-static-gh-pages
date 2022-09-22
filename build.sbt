scalaVersion := "2.13.9"

enablePlugins(ScalaJSPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "com.raquo" %%% "laminar" % "0.11.0"

name := "laminar-static"
