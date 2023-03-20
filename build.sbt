scalaVersion := "2.13.4"

enablePlugins(ScalaJSPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "com.raquo" %%% "laminar" % "15.0.0"

name := "laminar-static"
