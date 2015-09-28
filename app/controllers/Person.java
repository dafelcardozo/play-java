package controllers;

import java.util.UUID;

public class Person {
	public Person() {
	}

	public Person(UUID personId, String fname, String lname) {
		this.personId = personId;
		this.fname = fname;
		this.lname = lname;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	private String fname;
	private String lname;

	public String getIdasobject() {
		return idasobject;
	}

	public void setIdasobject(String idasobject) {
		this.idasobject = idasobject;
	}

	private String idasobject;
	public UUID getPersonId() {
		return personId;
	}

	public void setPersonId(UUID personId) {
		this.personId = personId;
	}

	private UUID personId;
}
