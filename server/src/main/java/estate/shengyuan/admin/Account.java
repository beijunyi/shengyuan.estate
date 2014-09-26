package estate.shengyuan.admin;

import javax.annotation.Nullable;
import javax.persistence.*;

import org.hibernate.annotations.DynamicUpdate;

@Entity
@DynamicUpdate
public class Account {

  @Id
  @GeneratedValue
  @Column(unique = true, updatable = false, nullable = false)
  private Integer id;

  @Column(unique = true, nullable = false)
  private String username;

  @Column(nullable = false)
  private String password;

  @Column(nullable = false)
  private Boolean admin;

  @Column(nullable = false)
  private Boolean active;

  @Nullable
  public Integer getId() {
    return id;
  }

  public void setId(@Nullable Integer id) {
    this.id = id;
  }

  @Nullable
  public String getUsername() {
    return username;
  }

  public void setUsername(@Nullable String username) {
    this.username = username;
  }

  @Nullable
  public String getPassword() {
    return password;
  }

  public void setPassword(@Nullable String password) {
    this.password = password;
  }

  @Nullable
  public Boolean getAdmin() {
    return admin;
  }

  public void setAdmin(@Nullable Boolean admin) {
    this.admin = admin;
  }

  @Nullable
  public Boolean getActive() {
    return active;
  }

  public void setActive(@Nullable Boolean active) {
    this.active = active;
  }
}
