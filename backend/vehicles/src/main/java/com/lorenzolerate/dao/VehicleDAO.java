package com.lorenzolerate.dao;

import java.util.List;

import com.lorenzolerate.model.Vehicle;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class VehicleDAO {

	@Autowired
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sf) {
		this.sessionFactory = sf;
	}

	public List<Vehicle> getAllVehicles() {
		Session session = this.sessionFactory.getCurrentSession();
		List<Vehicle> vehicleList = session.createQuery("from Vehicle").list();
		return vehicleList;
	}

	public Vehicle getVehicle(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Vehicle vehicle = (Vehicle) session.get(Vehicle.class, new Integer(id));
		return vehicle;
	}

	public Vehicle addVehicle(Vehicle vehicle) {
		Session session = this.sessionFactory.getCurrentSession();
		session.persist(vehicle);
		return vehicle;
	}

	public void updateVehicle(Vehicle vehicle) {
		Session session = this.sessionFactory.getCurrentSession();
		session.update(vehicle);
	}

	public void deleteVehicle(int id) {
		Session session = this.sessionFactory.getCurrentSession();
		Vehicle p = (Vehicle) session.load(Vehicle.class, new Integer(id));
		if (null != p) {
			session.delete(p);
		}
	}

	public List<Vehicle> getVehicleByType(int idVehicleType) {
		Session session = this.sessionFactory.getCurrentSession();
		Query query = session.createQuery("from Vehicle where idVehicleType = :idVehicleType ");
		query.setParameter("idVehicleType", idVehicleType);
		List<Vehicle> vehicleList = query.list();
		return vehicleList;
	}	
}
