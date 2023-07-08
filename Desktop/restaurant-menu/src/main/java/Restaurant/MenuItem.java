package Restaurant;

public class MenuItem {
    private String name;
    private String description;
    private Double price;
    private String category;
    private Boolean isNew;

    public MenuItem(String name, String description, Double price){
        this.name=name;
        this.description=description;
        this.price=price;
        this.category="Not categorized";
        this.isNew=false;
    }
    public MenuItem(String name, String description, Double price, String category, Boolean isNew){
        this.name=name;
        this.description=description;
        this.price=price;
        this.category=category;
        this.isNew=isNew;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;

    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Boolean getNew() {
        return isNew;
    }

    public void setNew(Boolean aNew) {
        isNew = aNew;
    }
}
