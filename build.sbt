import sbt._
import Keys._

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
libraryDependencies ++= Seq(
  "org.webjars" %% "webjars-play" % "2.4.0-1",
  "org.webjars" % "bootstrap" % "3.1.1-2",
  "org.webjars" % "primeui" % "1.0",
  "org.webjars" % "font-awesome" % "4.4.0"
)

// Play provides two styles of routers, one expects its actions to be injected, the other, legacy style, accesses its actions statically.
routesGenerator := InjectedRoutesGenerator

// Compile the project before generating Eclipse files, so that generated .scala or .class files for views and routes are present
EclipseKeys.preTasks := Seq(compile in Compile)

//coffeeScriptOptions := Seq("bare")

logLevel := Level.Warn

updateOptions := updateOptions.value.withConsolidatedResolution(true)

fork in run := false
