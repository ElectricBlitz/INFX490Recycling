package com.example.INFX490Recycling.Location;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
// location cannot be resolve to a type
// even though it's in the same package???????????
@Repository
public interface LocationRepository extends JpaRepository<Location, Integer> {

}
