<template>
    <div class="page-title-container">
        <div class="row">
            <!-- Title Start -->
            <div class="col-12 col-sm-6">
                <h1 class="mb-0 pb-0 display-4" id="title">
                    {{ title }}
                </h1>
                <nav
                    class="breadcrumb-container d-inline-block"
                    aria-label="breadcrumb"
                >
                </nav>
            </div>
            <!-- Title End -->

            <!-- Top Buttons Start -->
            <div
                class="col-12 col-sm-6 d-flex align-items-start justify-content-end"
            >
                <!-- Tour Button Start -->
                <button
                    type="button"
                    class="btn btn-outline-primary btn-icon btn-icon-end w-100 w-sm-auto"
                    id="dashboardTourButton"
                >
                    <span>Take a Tour</span>
                    <i data-acorn-icon="flag"></i>
                </button>
                <!-- Tour Button End -->
            </div>
            <!-- Top Buttons End -->
        </div>
    </div>
</template>

<script>
export default {
    name: "TheHeader",
    props: {
        title: {
            type: String,
            default: "Please set title prop",
        },
    },
};
</script>
