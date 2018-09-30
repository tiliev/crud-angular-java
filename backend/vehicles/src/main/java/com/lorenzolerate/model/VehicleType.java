package com.lorenzolerate.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicletype")
public class VehicleType {

	@Id
	@Column(name = "idvehicletype")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int idVehicleType;

	@Column(name = "type")
	String type;

	public VehicleType(int idVehicleType, String type) {
		super();
		this.idVehicleType = idVehicleType;
		this.type = type;
	}

	public VehicleType() {
		super();
	}

	public int getIdVehicleType() {
		return idVehicleType;
	}

	public void setIdVehicleType(int idVehicleType) {
		this.idVehicleType = idVehicleType;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "VehicleType [idVehicleType=" + idVehicleType + ", type=" + type + "]";
	}

}