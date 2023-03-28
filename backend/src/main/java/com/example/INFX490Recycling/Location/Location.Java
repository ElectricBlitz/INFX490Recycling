@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private integer id;
    private String name;
    private String address;
    private String phoneNumber;
    private float latitude;
    private float longitude;

    Location(String name, String address, String phoneNumber, float latitude, float longitude){
        this.name = name;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}