/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package pl.dao;

import javax.annotation.PostConstruct;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.NoResultException;
import javax.persistence.Persistence;
import javax.persistence.PersistenceContext;
import pl.model.Users;

/**
 *
 * @author kandif
 */

@Stateless
public class DaoUsers {
    
    @PersistenceContext
    private EntityManagerFactory emf = Persistence.createEntityManagerFactory("EasyPostPU");
    private EntityManager em = emf.createEntityManager();
  
    
    public Object login(Users u){
            try{
            Object login = null;
            login = em.createQuery("SELECT u from Users u "
                    + "where u.name=:name "
                    + "and u.pass=:pass")
                    .setParameter("name", u.getName())
                    .setParameter("pass", u.getPass())
                    .getSingleResult();
            return login;
            }catch(NoResultException a){
                return null;
            }
    }
    
    
}
