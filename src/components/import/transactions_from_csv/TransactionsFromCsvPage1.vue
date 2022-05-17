<template>
    <div class="p-6">
        <p>
            This assistant will help you import a delimited file containing a
            list of transactions. It supports both token separated files (such
            as comma separated or semi-colon separated) and fixed width data.
        </p>
        <p>
            For a successful import four columns have to be available in the import data:
        <ul>
            <li>
                a Date column
            </li>
            <li>
                an Amount column
            </li>
            <li>
                Source account column
            </li>
            <li>
                Destination account column
            </li>
        </ul>
        </p>
        <p>
            If there is no Account data available, a base account can be selected to which all data will be
            imported.
        </p>
        <p>
            Apart from a choise of delimiter, there are several options to tweak the importer. For example a number
            of lines can be skipped. Several date date and number formats are supported.
        </p>
        <p>
            Lastly, for repeated imports the preview page has buttons to Load and Save the settings. To save the
            settings, tweak the settings to your preferences (optionally starting from an existing preset), then
            (optionally) change the settings name and press the Save Settings button.
        </p>
        <div class="flex items-center justify-end mt-4 gap-2">
            <form-button @click="$router.push({ name: 'import.transactions_from_csv.page2' })" title="Next">
                <span class="material-icons-outlined">navigate_next</span>
            </form-button>
        </div>
    </div>
</template>