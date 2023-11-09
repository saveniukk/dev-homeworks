class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }

    itemCount() {
        return this.collection.length;
    }

    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if(pageIndex < this.pageCount() - 1 && pageIndex >= 0){
            return this.itemsPerPage;
        } else if(pageIndex === this.pageCount() - 1){
            if (this.collection.length % this.itemsPerPage === 0) {
                return this.itemsPerPage;
            } else {
                return this.collection.length % this.itemsPerPage;
            }
        } else return -1;
    }

    pageIndex(itemIndex) {
        if(itemIndex < this.collection.length && itemIndex >= 0){
            return Math.floor(itemIndex/this.itemsPerPage);
        } else return -1;
    }
}