package controllers;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import play.Logger;
import play.data.Form;
import play.libs.Json;
import play.mvc.*;
import views.html.*;

import com.datastax.driver.core.*;

public class Application extends Controller {

	public Result index() {
		return ok(index.render("Esta es mi aplicacion de ejemplo") );
		
	}

	public Result getPersons() {
		try (Cluster cluster = cluster()) {
			Session session = cluster.connect("mykeyspace");

			ResultSet results = session.execute("SELECT * FROM persons");

			List<Person> persons = results.all().stream()
					.map(row -> new Person(row.getUUID("person_id"), row.getString("fname"), row.getString("lname")))
					.collect(Collectors.toList());
			return ok(Json.toJson(persons));
		}
	}


	public Result addPerson() {
		try (Cluster cluster = cluster()) {
			Session session = cluster.connect("mykeyspace");

			Person p = Form.form(Person.class).bindFromRequest().get();
			session.execute("insert into persons (person_id, fname, lname) values (uuid(), '" + p.getFname() + "', '" + p.getLname() + "');");

			return redirect(routes.Application.index());
		}
	}



	public Result deletePerson() {
		try (Cluster cluster = cluster()) {
			Session session = cluster.connect("mykeyspace");

			Person p = Form.form(Person.class).bindFromRequest().get();

			session.execute("delete from persons where person_id = " + p.getPersonId()+";");

			return redirect(routes.Application.index());
		}
	}



	private static Cluster cluster() {
		return Cluster.builder().addContactPoint("127.0.0.1").build();
	}
}
