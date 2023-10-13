export type PostDTO = {
    post_id:           string;
    title:        string;
    intro:        string;
    description:  string;
    callToAction: string;
    images:       Image[];
    link:         string;
}

type Image = {
    image: string;
    alt:   string;
}