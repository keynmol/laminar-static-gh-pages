scalaVersion := "3.2.2"

enablePlugins(ScalaJSPlugin)

scalaJSUseMainModuleInitializer := true

libraryDependencies += "com.raquo" %%% "laminar" % "15.0.1"

name := "laminar-static"

import org.scalajs.linker.interface.ModuleSplitStyle

scalaJSLinkerConfig ~= {
  _.withModuleKind(ModuleKind.ESModule)
    .withModuleSplitStyle(ModuleSplitStyle.SmallModulesFor(List("example")))
}
