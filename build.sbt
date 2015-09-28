//import sbt._
//import sbt.Keys._
//import org.scalajs.sbtplugin.ScalaJSPlugin
//import org.scalajs.sbtplugin.ScalaJSPlugin.autoImport._

name := """play-java"""

version := "1.0"

lazy val root = (project in file(".")).enablePlugins(PlayJava)

scalaVersion := "2.11.6"

libraryDependencies ++= Seq(
  javaJdbc,
  cache,
  javaWs
)

libraryDependencies += "com.datastax.cassandra" % "cassandra-driver-core" % "2.1.0"
//libraryDependencies += "org.webjars" % "jquery" % "1.10.2"
//libraryDependencies += "org.scala-js" %%% "scalajs-dom" % "0.8.0"
libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.4.0-1",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "primeui" % "1.0",


"org.webjars" % "font-awesome" % "4.4.0"
//"org.webjars.bower" % "jquery.ui" % "1.11.4"
///  "org.scala-lang.modules.scalajs" %% "scalajs-jquery" % "0.1-SNAPSHOT"
)

// Play provides two styles of routers, one expects its actions to be injected, the
// other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator


// Compile the project before generating Eclipse files, so that generated .scala or .class files for views and routes are present
EclipseKeys.preTasks := Seq(compile in Compile)

//coffeeScriptOptions := Seq("bare")

logLevel := Level.Warn
//logLevel := Level.Debug

updateOptions := updateOptions.value.withConsolidatedResolution(true)



fork in run := false
