package estate.shengyuan.record;

import java.util.List;
import javax.persistence.*;

@Entity
public class EstateProject {
  @Id
  @GeneratedValue
  @Column(unique = true, updatable = false, nullable = false)
  private Integer id;

  private String title;

  private String tagline;

  @Lob
  private byte[] thumbnail;

  @Lob
  private List<byte[]> carousel;

  private String address;






}
